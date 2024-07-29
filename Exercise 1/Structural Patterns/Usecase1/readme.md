# Media Player System with Adapter Pattern
## Description
This project demonstrates the use of the Adapter design pattern in a media player system. The Adapter pattern is used to enable compatibility between different interfaces. In this case, it allows a media player system to support both MP3 and MP4 file formats by adapting different interfaces to a common MediaPlayer interface.

## Features
MediaPlayer Interface: Defines a common interface for playing media files.
MP3Player Class: Implements the MediaPlayer interface to handle MP3 file playback.
MP4Player Class: Provides an alternative interface for playing MP4 files.
MP4Adapter Class: Adapts the MP4Player interface to the MediaPlayer interface, allowing it to be used interchangeably with MP3Player.
Flexible Media Playback: Supports multiple media formats using a common player interface.

## Use Case
Scenario: Media Player System

In a media player application, you want to support multiple file formats, such as MP3 and MP4. The challenge is to integrate these formats into a unified player interface without modifying the existing code that relies on the MediaPlayer interface.
