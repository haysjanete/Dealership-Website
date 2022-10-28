# CarCar

Team:

* Janete Hays - Sales
* Ted - Service

## Design

Ted - I created the React components for the service microservice and the manufacturer list and form as well as the vehicle model list and form for the inventory microservice.

## Service microservice

For my models I created a Technician model to track technicians with just basic employee information. I also created an AutomobileVO model that polls from the inventory api with just a VIN property. I created a ServiceAppointment model to track appointments with some basic appointment information. I also added a foreign key to track which Technician is assigned to a specific appointment. I added a vip_status property that in the view when the method is "POST", checks to see if the VIN entered came from our inventory by referencing the VIN entered against the objects of AutomobileVO. I also added a service status property to allow React later to filter out appointments that are Cancelled or Finished.

Most of my views were pretty standard. I created list views for both Technician and ServiceAppointment and detail views for them to make it easier for myself to interact with the database. The only unique view I created was for the service history. I made it so when it recieves a "POST" request that will contain a VIN, it will filter through all appointments and return the ones that match the VIN that was requested.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
