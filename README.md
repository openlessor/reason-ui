# OpenLessor POC

Written using ReScript and React. This is a work in progress. In it's current state, it should not be used by anyone. Any or all of this document is subject to change. 

## Running the frontend POC
Coming soon

## Frontend POC URL
Coming soon

## Use Cases for OpenLessor POC (frontend components will eventually be packaged as reusable React component library)
- Hardware Cloud Equipment Rental
- Apartment / Room Rental
- Cloud Server
- Website Subscription

## Plans for Frontend POC (written in ReScript using Reason React)
- Nearly zero configuration React components which you simply need to point to Executor endpoint URL to bootstrap
- Styled using Tailwind CSS and Packaged using ParcelJS
- Frontend POC will be deployed to Linode bucket

## Plans for Backend POC (OpenLessor Executor; written in Rust using Rocket and Diesel)
- Multiple billing period type (i.e.: seconds, minutes, days, weeks, months)
- Configurable to call a provisioner (i.e.: hook for GET/POST URL during different phases; open source micro service for this TBD)
- Each product subscription type will have it's own unique endpoint URL for configuring frontend React HOC
- Service POC will be deployed to serverless infrastructure (service used TBD, maybe Vercel)

All with multiple billing types depending on if it fits the use case; such as per minute, per day, per week, per month.

## Vision

OpenLessor will be an open source project for lease management, and subscription management. It will offer multiple billing types based on time units such as minutes, days, weeks, and months. I am currently working on this in my freetime and my hope is that the project will slowly progress over time. This is the frontend POC which will eventually interact with the backend service. The backend service is yet to be developed, however you will soon find it as a Rust project in a repository of the same organization.
