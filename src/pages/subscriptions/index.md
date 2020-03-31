---
templateKey: subscriptions-page
title: UrbanStems Subscriptions
intro: Learning from our customers while building a new revenue stream.
whyTitle: Why Subscriptions?
whyIntro: >-
  One of our company-wide OKRs was to increase repeat purchase rate. At that
  time, our COA was high as we were competing for ad space with big industry
  players that had big budgets. Because of this, much of our focus that quarter
  was to find new revenue streams within our existing customer base.
  Subscriptions not only made it easier for our customers to regularly send
  flowers to themselves or loved ones, but it also encouraged repeat purchases.
why1: >-
  Our customers look much different than the average floral ecommerce customer.
  They send flowers on average of 3x per year vs the industry average of 1.5x
  per year. They also send throughout the year with most people sending for
  everyday occasions. This is in contrast to the big industry players like
  1800-Flowers where 50% of their revenue come on Valentine's Day and Mother's
  Day alone (vs 5.6% for us).
why1Photo: /img/urbanstems-delivery.jpg
why2: >-
  Our customer care team was receiving multiple requests per week from customers
  who wanted fresh flowers regularly delivered to their home or office. We found
  that many of these people were manually sending themselves flowers along with
  a personal note of encouragement.
why2Photo: /img/urbanstems-why-2.jpg
customerCare:
  description: >-
    They need to field questions around subscriptions, changes of address,
    cancellations etc. They need to have a good idea about how the subscription
    checkout flow works and what the limitations are to assist customers.
  icon: /img/icon-customer-care.svg
  team: Customer Care
marketing:
  description: >-
    They bring awareness to subscriptions through digital ads and partnerships
    with companies like Vogue.
  icon: /img/icon-marketing.svg
  team: Marketing
merchandising:
  description: >-
    They need to be planning ahead to add more variety to our product mix so
    each subscription delivery is unique.
  icon: /img/icon-merchandising.svg
  team: Merchandising
operations:
  description: >-
    They’ll have more recurring deliveries and they’ll be paying special
    attention to subscriptions (such as including a vase in the first delivery).
  icon: /img/icon-operations.svg
  team: Operations
business:
  description: >-
    They need to be informed on the timeline on subscriptions so they can
    forecast buying extra bouquets and work closely with Marketing and
    Merchandising as demand scales.
  icon: /img/icon-business-intelligence.svg
  team: Business Intelligence
engineering:
  description: >-
    They need to understand how the UX flow works, what subscription options are
    (duration, frequency, pricing tiers) and what transactional emails we need
    to build that into our admin system backend as well as frontend.
  icon: /img/icon-engineering.svg
  team: Engineering
---
We operated on a 2 week design sprint with the goal to get an early version of subscriptions off the ground in 6-8 weeks. We held weekly design reviews which were open to anyone who wanted to attend and I also held regular one on ones with leaders from each stakeholding team to communicate progress, give feedback and discuss any concerns. The design team also had daily standups to discuss progress, next steps and any blockers.

## Wireframing
Once we had an idea of the user flow as well as the different possible combinations of subscriptions, I started to put together a wireframe for mobile and desktop. In one of our whiteboarding sessions, we had an idea to use an existing drawer component for the customer to configure their subscription. Selecting a plan anywhere on this page would bring up the drawer. This interaction nicely mirrored our checkout flow and brought consistency to the experience.

<figure>

![Subscriptions Wireframe Desktop](/img/urbanstems-subscriptions-wire-desktop.jpg)

![Subscriptions Wireframe Mobile](/img/urbanstems-subscriptions-wire-mobile.jpg)

</figure>
<figure>

![Subscriptions Wireframe Desktop](/img/urbanstems-subscriptions-wire-desktop2.jpg)

![Subscriptions Wireframe Mobile](/img/urbanstems-subscriptions-wire-mobile2.jpg)

</figure>

## Design
From the wireframe, I mocked up a higher-fidelity design. After discussions with merchandising around product mix as well as the engineering team around technical limitations around our inventory, we ended up simplifying things down to a single subscription plan with plans to add more in the future.

<figure>

![Subscriptions Design Desktop](/img/urbanstems-subscriptions-design-desktop1.jpg)

![Subscriptions Design Mobile](/img/urbanstems-subscriptions-design-mobile1.jpg)

</figure>
<figure>

![Subscriptions Design Desktop](/img/urbanstems-subscriptions-design-desktop2.jpg)

![Subscriptions Design Mobile](/img/urbanstems-subscriptions-design-mobile2.jpg)

</figure>

## Launch Pains
When we launched our initial version of subscriptions, the whole team was excited to see customer feedback and see the subscriptions come rolling in. The reality was much different. In the first week of launch, we had just 1 or 2 subscriptions and things seemed to be crawling along. Our conversion rate was just 0.1% versus our storefront conversion of 11%. What was the problem? We invested so much time and resources into building this but with little results to show.

## Talking with Customers
We decided that the best way forward was to get feedback from customers as well as people who had never used UrbanStems. Our product designer and I setup user interviews with 10 people to get feedback on subscriptions. From these interviews, we landed on two main things to address. The first was that users wanted more transparency around which bouquets they were getting. The second was that most of the messaging on the subscriptions page was geared towards buying a subscription for yourself. Although customers liked this idea, the price point wasn't in line with their expectations, but customers did say that they would be likely to gift at that pricepoint.

<figure>

![Subscriptions Feedback](/img/subscriptions-quotes-1.jpg)

![Subscriptions Feedback](/img/subscriptions-quotes-2.jpg)

</figure>

## Refining the Message
In the next iteration, we decided to simplify the messaging and imagery and focus it around gifting. Rather than breaking subscriptions up into plans, I decided to show how the process works and display product photography of past bouquets. To give more visibility to subscriptions, I also designed a module that allows customers browsing the storefront to subscribe and recieve a bouquet as the first delivery in their subscription.

<figure>

![Subscriptions Design Desktop](/img/urbanstems-subscriptions-design-desktop3.jpg)

![Subscriptions Design Mobile](/img/urbanstems-subscriptions-design-mobile3.jpg)

</figure>

## Results
We saw an immediate uptick in subscriptions after implementing these changes. We started getting 20-30 subscriptions per day and while conversion still wasn't up to what we were hoping, it was a major improvement over the previous iteration.
