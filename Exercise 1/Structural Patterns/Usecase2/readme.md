# User Notification System with Adapter Pattern
## Description
This project showcases the use of the Adapter design pattern in a user notification system. The Adapter pattern allows the integration of different types of notification services (e.g., Email, SMS, Push Notifications) into a unified notification system. By adapting various notification interfaces to a common Notifier interface, the system can send notifications through multiple channels without needing to modify existing code.

## Features
Notifier Interface: Defines a common interface for sending notifications.
EmailNotifier Class: Implements the Notifier interface to send email notifications.
SMSNotifier Class: Implements the Notifier interface to send SMS notifications.
PushNotifier Class: Implements the Notifier interface to send push notifications.
Adaptation Classes: Adapts different notification services to the common Notifier interface using the Adapter pattern.
Unified Notification System: Supports multiple notification methods through a single interface, making the system extensible and easier to maintain.

## Use Case
Scenario: User Notification System

In a notification system where users can receive updates through various channels, such as email, SMS, and push notifications, you want to implement a common interface to handle these notifications. The challenge is to integrate different notification methods into a single system without altering the existing code that relies on a specific notification interface.