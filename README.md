# Branch international

### I have created this customer support application by which each customer can raise their issue.

### Tech Stack

Backend: Nodejs

Database: MongoDB

Websockets: Socket.io

Frontend: Vanilla JavaScript

---

### Extra Features from the doc:

- Using websockets updating UI in real time

---

To run this project first you need to install `nodejs` in your machine.

**Steps to install nodejs:**

- Head over to official [NodeJS](https://nodejs.org/en/) website and download it’s stable version `**16.17.1 LTS**`
- After download - open the package and. install the nodejs inside your machine

---

Now clone this repository to your local environment, I have already given access to it.

**Steps to run the project:**

- After cloning project handover to root directory of the project
- Than install all the dependencies - to install run command in your terminal  `npm install .`
- After that to run project run command in terminal - `npm run dev`

Congratulations! now you are ready to give it a test to this project.

---

### As Admin

Go to [http://localhost:3000](http://localhost:3000) - here you will be able to see all the users available who submitted their queries

Now click on any of the id and you will be able to see their queries and on the top left corner you can write your answer and submit it to that particular user.

This all works on streamline using the **`websockets`** to have real time communication.

### As Customer

Go to [http://localhost:3000/clienthome.html](http://localhost:3000/clienthome.html) - enter your user id inside the input box and click on login.

Here you can submit your queries to customer support as well will be able to see their answers here.

This also works on `websockets` thus it also works in real time.
