# Swiggy Notification System with Adapter Pattern
## Description
This project demonstrates the use of the Adapter design pattern in a Swiggy notification system. The Adapter pattern is utilized to integrate various notification services into a unified system. By adapting different notification interfaces (e.g., Email, SMS, Push Notifications) to a common Notifier interface, the system can manage and send notifications across multiple channels seamlessly.

## Features
Notifier Interface: Defines a standard interface for sending notifications.
EmailNotifier Class: Implements the Notifier interface to handle email notifications.
SMSNotifier Class: Implements the Notifier interface to handle SMS notifications.
PushNotifier Class: Implements the Notifier interface to handle push notifications.
Adaptation Classes: Adapts different notification services to a common interface using the Adapter pattern.
Unified Notification System: Allows sending notifications through various channels using a single, consistent interface.

## Use Case
Scenario: Swiggy Notification System

In a food delivery application like Swiggy, users need to receive updates about their orders through different notification channels, such as email, SMS, and push notifications. The goal is to integrate these notification methods into a single system that can handle notifications uniformly across different channels.