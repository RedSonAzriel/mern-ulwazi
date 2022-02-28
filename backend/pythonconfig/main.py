# Install the Greppo python package
pip install greppo

#Setup the project - Create a new dir for your Greppo project, and create a new script,
mkdir my-greppo-app
cd my-greppo-app
touch app.py

#create a new file - Create a new file app.py that will setup the user script
touch app.py

#Populate script with a simple app to get started with,
from greppo import app
import numpy as np
x = app.number(name="x", value=3)
print('Numbers list: ', np.ones(10) * x)

#Run the app and you’re on your way building a geospatial app in seconds!
greppo serve app.py