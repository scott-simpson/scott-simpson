---
templateKey: project-post
title: A Better Way To Track Deliveries
shortTitle: A Better Way To Track Deliveries
description: >-
  The Challenge was to give customers an easy, transparent way to track their
  deliveries. We created a beautiful, realtime order tracking system for both
  our on-demand and nationwide customers.
shortDescription: 'Giving customers an easy, transparent way to track their deliveries.'
date: '2018-07-23'
client: UrbanStems
role:
  - UI/UX
  - Frontend
technology:
  - React
  - HTML
  - CSS
  - JSX
cardImage: /img/portfolio-card-3.jpg
cardBackground: '#c8c4e4'
cardText: dark
---
## Reducing The Question “When?”

Since launching our nationwide delivery service back in January, our customer care team was fielding more and more calls from customers asking about the status of their order. We didn’t have a system up until this point for order tracking because of the largely on-demand nature of our business. Working with the care team, we decided that creating an easy way for customers to track their order would free up their time to address larger issues.

## Two Types Of Customers

One of the main challenges of designing our order tracking system was to make the experience consistent for our two different types of customers. Our on-demand customers received deliveries by bike messenger or car depending on their location. The order often went out just hours after it was placed. Our nationwide customers received deliveries in a box via FedEx or UPS. Typically, these orders arrive a day or two after they’re placed. With two very different experiences, how do we design a system that works for both?

## Building The Timeline

A timeline of order history seemed like the most obvious place that the two experiences overlapped, so I started there. I worked with the engineering team to list out the different order statuses for each experience. From this, I created a wireframe showing the experience along with the possible order history states.
<figure>

![Order tracking wireframe](/img/urbanstems-ordertracking-wireframes.jpg)

</figure>

## Refining The Design

From the wireframe, I designed a few different iterations of the order tracker in Figma and added more detail. In the design, I included the recipient’s delivery address, the order timeline, a map as well as the carrier and courier info where applicable. I also designed a list view and basic navigation so that customers can easily switch between orders.

<figure>

![Order tracking wireframe](/img/urbanstems-ordertracking-design-1.jpg)

</figure>

## The Small Details

Working with the engineering team to pull in the order statuses, I built and tested a prototype in React. To make it feel a little more like the order was updating in realtime, I added a small animation.

## The Future

I'd like to add some small touches to the order tracking system that will further improve the customer experience. For both on-demand and nationwide customers, I'd like to display who in the facility is prepping their order. We already keep track of that information, so it would be a matter of exposing that to the customer. For on-demand customers, I'd like to show the courier's location on the map.
