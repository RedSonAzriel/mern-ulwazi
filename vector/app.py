from pandas_datareader import wb
data = wb.download(indicator='FP.CPI.TOTL.ZG', country='all', start=2019, end=2019)
print(data)