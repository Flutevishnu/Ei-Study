# Collection of Books in a Library with Adapter Pattern
## Description
This project demonstrates the Adapter design pattern in the context of managing a collection of books in a library. The Adapter pattern is used to unify different types of book cataloging systems under a common interface. This allows the library system to handle various book formats and cataloging methods through a single interface, making the system more flexible and extensible.

## Features
BookCatalog Interface: Defines a common interface for managing book collections.
PhysicalBookCatalog Class: Implements the BookCatalog interface to manage physical books.
DigitalBookCatalog Class: Manages digital books but with a different interface.
DigitalBookAdapter Class: Adapts the DigitalBookCatalog interface to the BookCatalog interface, allowing it to be used interchangeably with physical book catalogs.
Unified Library System: Provides a common interface for interacting with both physical and digital book collections.

## Use Case
Scenario: Collection of Books in a Library

In a library system where both physical and digital books are managed, you need a common interface to handle these different types of books. The challenge is to integrate digital book management into the existing system that was designed to handle physical books, without altering the existing code.