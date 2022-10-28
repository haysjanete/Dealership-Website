# CarCar

Team:

* Janete Hays - Sales
* Ted - Service

## Design

In the inventory microservice I was in charge of creating react components of an automobile list and a new automobile form. When creating the automobile list I pulled from the automobile model to show the list of vins and there respective properties. The vehicle Manufacturer was accessed through the foreignkey for the Vehicle Model. When creating the automobile form I made sure the attributes where respective to what the list needed to be displayed. 


## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Sales microservice is used to add a sales person, add a customer, record a sale, list all sales, and get a specific sales person's history from the database. In order for the sales microservice to work we would require automobile information from the Inventory API. All sales components where added to a seperate folder under src for organization measures. In the sale's component folder I have added a total of 3 forms and two lists. The forms created where a New customer form which is used to create a new customer, a New sale form which is used when creating a new sale, and a new sales person form which is used to create a new sales person. The sales list, lists all sales made respective to sales person. The sales person record lists sales from specific sales person selected in the drop down. 

Four models where created in this project, a sales person, customer, sales record, and a VO which was used to have access to the vin for automobiles in inventory(this becomes useful when creating a new sale). The sales record model has ties to the customer, sales person, and automobile models in the sales microservice using foreignkeys and shows a price attribute. The sales person model comes with a name, employee number, and an added image attribute. Finally the customer model has a name, address, and phone number attribute. 


