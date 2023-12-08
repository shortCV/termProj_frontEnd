# termProj_frontEnd

Setting this up:

# Steps to get backend running locally
1. Open the backend folder with PyCharm. You can do this by going file->open and selecting the folder within react-assignment called backend

2. Configure your project interpreter. In Pycharm Pro, this might be done automatically for you. Otherwise, you can go to file->settings, and select Python Interpreter under Project: backend, and clicking Add Interpreter->Add Local Interpreter screenshot for adding interpreter

<img width="797" alt="Screenshot 2023-12-05 at 2 38 34 AM" src="https://github.com/shortCV/termProj_frontEnd/assets/82280581/78df31a1-a7cb-4da1-9db9-246b4515fa3a">

3. Choose the default settings and click OK screenshot for virtualenv settings

<img width="791" alt="Screenshot 2023-12-05 at 2 39 03 AM" src="https://github.com/shortCV/termProj_frontEnd/assets/82280581/ae16c160-076f-455e-91ef-f3d01f8b9715">

4. Then, you can install dependencies using pip install -r requirements.txt

5. Create a run configuration: edit run configs

<img width="792" alt="Screenshot 2023-12-05 at 2 39 29 AM" src="https://github.com/shortCV/termProj_frontEnd/assets/82280581/48a9bfe0-858c-4f12-b782-491876b906df">

6. Configure it to run manage.py with the parameter runserver: finished run config

<img width="788" alt="Screenshot 2023-12-05 at 2 39 41 AM" src="https://github.com/shortCV/termProj_frontEnd/assets/82280581/4934a8d7-8cda-4b76-9cc1-2c46cc70af59">

7. Create a file called .env in the backend folder

8. Generate a secret key by running python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())' in the terminal. Copy the output.

9. Edit .env (created in part 9) with a text editor like notepad, and add a line that says SECRET_KEY="your-secret-key-here". Paste the output from part 10 into 'your-secret-key-here'.

10. On the terminal, navigate to react-assignment/backend and run python manage.py migrate

11. Run the server by clicking the play button for the run configuration you set up

12. Navigate to 127.0.0.1:8000! Your backend should run.
    
# Steps to get frontend running locally

1. Open the frontend folder with WebStorm. You can do this by going file->open and selecting the folder within react-assignment called frontend

2. In the terminal, ensure you are in the react-assignment/frontend folder. Run npm install in the terminal. If you are on a lab computer, you may need to run the following:

- $env:path += ";C:\Util\WPy64-31090\n\" (only works on powershell, like in WebStorm's terminal)
- C:\Util\WPy64-31090\n\npm.cmd install

3. Run the frontend with npm start in the terminal. If you are on a lab computer, you may need to run C:\Util\WPy64-31090\n\npm.cmd start

4. (optional, but helpful) Add a run configuration in WebStorm:

<img width="788" alt="Screenshot 2023-12-05 at 2 40 04 AM" src="https://github.com/shortCV/termProj_frontEnd/assets/82280581/73c2b76b-1fa0-4a12-b2f4-4fb3ca4c487e">

When you add a run configuration, select npm from the list. You want to ensure:

- Command: is run

- Scripts: is start

- Node interpreter: is not blank. If you're on the lab computer you may need to add C:\Util\WPy64-31090\n\node.exe

- Package Manager: is not blank. If you're on the lab computer you may need to add C:\Util\WPy64-31090\n\npm.cmd

Then click OK, and you should be able to run your frontend with the green play button.

# Miscellaneous

- Hovering over UI elements triggers tooltip explanations (can be seen on main screen)
- Use of breadcrumbs
- Link: https://github.com/shortCV/termProj_frontEnd
