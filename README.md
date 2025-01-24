# Brainflix Frontend
![Brainflix logo](https://raw.githubusercontent.com/kirk-en/kirk-enbysk-brainflix/0b614d82f85bf281e6741bba669bd39cf70c5a36/src/assets/logo/BrainFlix-logo.svg)

A prototype video streaming platform frontend built using React. This app interacts with a custom-built API to manage video data, including video details, comments, and related videos. The app enables users to view, comment, and upload videos.

## Project Overview

BrainFlix is designed to simulate a full-featured video streaming platform. The frontend is built to consume a custom API that manages video data. Originally based on a mock API, the final project transitioned to a real API for persistence and management of video data. This frontend allows users to:

- View videos and their details.
- Post and delete comments.
- Upload new videos to the platform.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigating between pages, specifically for viewing individual videos.
- **Axios**: For making HTTP requests to the backend API.
- **SASS**: For styling components with variables, BEM principles, and Flexbox layout.

## Functional Requirements

- **Video Page**: Displays individual videos with their details, comments, and related videos.
- **Video Upload**: Allows users to submit new videos to the platform.
- **Comments Section**: Displays and allows users to add comments to a video.
- **Responsive Design**: The app is fully responsive.

## Future Improvements

- Implement user authentications.
- Add support for uploading custom video thumbnail images.
- Extend API with POST/DELETE endpoints for managing video comments.
