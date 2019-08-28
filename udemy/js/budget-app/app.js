/**
 * Planning:
 * 1. Add event handler (Controller)
 * 2. Get data out of input field (UI)
 * 3. Add new values to data structure (Data)
 * 4. Add new values to UI (UI)
 * 5. Calculate budget (Data)
 * 6. Update UI (UI)
 */

// ************************************************************
// **Implementing the module pattern**

// BUDGET CONTROLLER
var budgetController = (function(){
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome){
        if (totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else{
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        // Notice that the names are the same as the values of the type in HTML.
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentatge: -1
    };

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(current){
            sum += current.value;
        });
        data.totals[type] = sum;
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;
            
            // ID = last ID + 1
            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; 
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp'
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            // Push new item to our array(s)
            data.allItems[type].push(newItem);
            
            // Return new element
            return newItem;
        },

        deleteItem: function(type, id){
            var ids, index;
            // Similar to the foreach function
            data.allItems[type].map(function(current){
                // Will always return a brand new array
                return current.id;

            });

            index = ids.indexOf(id);

            if (index !== -1){
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function(){
            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate budget (income - expenses)
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentatge of income spent
            if (data.totals.inc > 0){
                data.percentatge = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else{
                data.percentatge = -1;
            }
        },

        calculatePercentages: function(){
            data.allItems.exp.forEach(function(current){
                current.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function(){
            var allPercentages = data.allItems.exp.map(function(current){
                return current.getPercentage();
            });
            return allPercentages;
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentatge: data.percentatge
            };
        },

        // Function for testing inputs
        testing: function(){
            console.log(data);
        }
    };

})();

// UI CONTROLLER
var uiController = (function(){
    // Private method that holds information on HTML class names, keeps code modular and clean
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentatgeLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num, type){
        var numSplit, int, dec;
        // + or - before number
        // 2 decimal points for each number
        // comma after thousands

        num = Math.abs(num);
        num = num.toFixed(2); // changes to a string

        numSplit = num.split('.');

        int = numSplit[0];
        dec = numSplit[1];

        if (int.length > 3){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;
    };

    // This function can be reused
    var nodeListForEach = function(list, callback){
        for (var i=0; i<list.length; i++){
            callback(list[i], i);
        }
    };

    // Object that holds all the public methods. Notice that you return them from the function expression
    return {
        getInput: function(){
            // Read data from UI and return object for appController
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will either be inc for income, or exp for expense
                description: document.querySelector(DOMstrings.inputDescription).value, 
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type){
            var html, newHtml, element;
            // Create HTML string with placeholder text (template HTML can be found in index.html, commented out)
            // Placeholder text is %<name>%, e.g. %id%
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace placeholder text with data from obj
            // Makes use of the 'replace()' method in JS strings
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // Insert HTML into DOM
            // Select some element on the webpage from the DOM. Also insert HTML next to that. Makes use of insertAdjacentHTML() method
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID){
            var element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
        },

        // Clears the input fields using querySelectorAll()
        clearFields: function(){
            var fields, fieldArr;
            // Fetch the input strings, returns a list
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            // ** Trick to turn list into array by calling the slice function from Array prototype
            // We need the list to be an array because arrays have useful functions tied to it
            fieldArr = Array.prototype.slice.call(fields);

            // Iterate through array using forEach method
            // Uses a callback function with three elements
            fieldArr.forEach(function(current, index, array){
                current.value = '';
            });

            // Places the cursor back to the description line
            fieldArr[0].focus();
        },

        // Display the budget that was calculated
        displayBudget: function(obj){
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if (obj.percentatge > 0){
                document.querySelector(DOMstrings.percentatgeLabel).textContent = obj.percentatge + '%';
            } else{
                document.querySelector(DOMstrings.percentatgeLabel).textContent = '---';
            }
        },

        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel); // Returns a node list

            nodeListForEach(fields, function(current, index){
                if (percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                } else{
                    current.textContent = '---';
                }
            });
        },

        displayMonth: function(){
            var now, year, month, months;

            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            
            now = new Date();
            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },

        changeType: function(){
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue);

            nodeListForEach(fields, function(current){
                current.classList.toggle('red-focus');
            });

            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var appController = (function(budgetCtrl, uiCtrl){
    var setupEventListeners = function(){
        var DOM = uiCtrl.getDOMstrings(); // DOM elements for event listeners

        // Event listener for the button
        // DO NOT USE () FOR THE FUNCTION, ADDEVENTLISTENER WILL CALL IS FOR US
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // Event listener for pressing return key
        // Keycodes can be found at https://keycode.info/
        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();    
            }
        });

        // Event listener for the delete operation using event delegation
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', uiCtrl.changeType);
    };

    var updateBudget = function(){
        /**
         * TODO
         * 1. Calculate the budget
         * 2. Return the budget
         * 3. Display the budget on the UI
         */

         // 1.
         budgetController.calculateBudget();

         // 2.
         var budget = budgetController.getBudget();

         // 3.
         uiController.displayBudget(budget);
    };

    var updatePercentages = function(){
        /**
         * TODO
         * 1. Calculate the percentages
         * 2. Read from budget controller
         * 3. Display the percentages on the UI
         */

         // 1.
        budgetController.calculatePercentages();

         // 2.
        var percentages = budgetController.getPercentages();

         // 3.
         uiController.displayPercentages(percentages);
    };

    // So that we don't repeat ourselves when we add an item
    // This function is present in the btn event listener
    // as well as the global event listener for the return key
    var ctrlAddItem = function(){
        /**
         * TODO
         * 1. Get the field input data
         * 2. Add item to budget controller
         * 3. Add the new item to UI
         * 4. Clear the fields
         * 5. Calculate and update budget
         * 6. Calculate and update percentages
         */

         var input, newItem;

         // 1.
         input = uiCtrl.getInput();
         // Some error handling
         if (input.description !== '' && !isNaN(input.value) && input.value > 0){
            // 2.
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3.
            uiCtrl.addListItem(newItem, input.type);
            
            // 4.
            uiCtrl.clearFields();

            // 5.
            updateBudget();

            // 6.
            updatePercentages();
         }
        
    };

    var ctrlDeleteItem = function(event){
        // Need the event arugement because we want the event target that was bubbling up
        // Test it with this: console.log(event.target);
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.id;
        if (itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // Delete item from data structure
            budgetController.deleteItem(type, ID);

            // Delete item from UI
            uiController.deleteListItem(itemID);

            // Update and show new budget
            updateBudget();

            // Update and show percentages
            updatePercentages();
        }

    };

    // public initialization function
    return {
        init: function(){
            console.log('app has started');

            // Call setupEventListeners function
            setupEventListeners();

            // Clear the budget ui
            uiController.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentatge: -1
            });

            uiController.displayMonth();
        }
    };

})(budgetController, uiController); // contains objects returned from the controllers. This is possible due to closures.
// appController can still access the functions in the other controllers due to closures.

// Call our init function to start
appController.init();