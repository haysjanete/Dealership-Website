# CarCar

Team:

* Janete Hays - Sales
* Ted - Service

## Design

In the inventory microservice I was in charge of creating react components of an automobile list and a new automobile form. When creating the automobile list I pulled from the automobile model to show the list of vins and there respective properties. The vehicle Manufacturer was accessed through the foreignkey for the Vehicle Model. When creating the automobile form I made sure the attributes where respective to what the list needed to be displayed.


Ted - I created the React components for the service microservice and the manufacturer list and form as well as the vehicle model list and form for the inventory microservice.

## Service microservice

For my models I created a Technician model to track technicians with just basic employee information. I also created an AutomobileVO model that polls from the inventory api with just a VIN property. I created a ServiceAppointment model to track appointments with some basic appointment information. I also added a foreign key to track which Technician is assigned to a specific appointment. I added a vip_status property that in the view when the method is "POST", checks to see if the VIN entered came from our inventory by referencing the VIN entered against the objects of AutomobileVO. I also added a service status property to allow React later to filter out appointments that are Cancelled or Finished.

Most of my views were pretty standard. I created list views for both Technician and ServiceAppointment and detail views for them to make it easier for myself to interact with the database. The only unique view I created was for the service history. I made it so when it recieves a "POST" request that will contain a VIN, it will filter through all appointments and return the ones that match the VIN that was requested.

For my React components I created an AppointmentList that displays all appointments with the service_status of "Submitted" and has buttons to change the service_status to "Cancelled" or "Finished". This will update the service_status on the ServiceAppointment and will remove the appointment from the current list being displayed. I created a ServiceAppointmentForm that allows one to create a new ServiceAppointment and restricts the time available to 9am-5pm. I created a TechnicianForm that allows one to create a new Technician. I created a ServiceHistory that takes in a VIN as part of a "POST" request and returns and displays all appointments that match that VIN.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
