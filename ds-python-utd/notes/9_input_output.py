# conda install sqlalchemy
# conda install lxml
# conda install html5lib
# conda BeautifulSoup4
# csv excel html sql
import pandas as px
import os
print(os.getcwd())
# px.read_csv('google_stock_data.csv')
file = '../extras/911.csv'
px.read_csv(file)
df = px.read_csv(file)
print(df)
#df.to_csv('My_output.csv', index=False)
# print(px.read_csv('My_output.csv'))

# pandas cannot import formulas, images, etc.
# conda install xlrd
#df = px.read_excel('Excel_Sample.xlsx', sheetname='Sheet1')
#print(px.read_excel('Excel_Sample.xlsx', sheetname='Sheet1'))
#df.to_excel('Excel_Sample2.xlsx', sheet_name='NewSheet')

#data = px.read_html('https://www.fdic.gov/bank/individual/failed/banklist.html')
# print(type(data))
# print(data[0])
# print(data[0].head())

# sql
#from sqlalchemy import create_engine
#engine = create_engine('sqlite:///memory:')
#df = px.read_csv('Excel_Sample_csv.csv')
#df.to_sql('my_table', engine)
#sqldf = px.read_sql('my_table', con=engine)
#Ref: www.pieriandata.com
