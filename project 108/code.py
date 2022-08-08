import plotly.figure_factory as ff
import csv
import scipy
import pandas as pd

df=pd.read_csv("data.csv")
fig=ff.create_distplot([df["Avg Rating"].tolist()],["Avg Rating"],show_hist=True)
fig.show()