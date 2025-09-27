Test Client

Project Name: test-client
Version: 0.1.0
Private: Yes

Admin Credentials

Email: admin@mail.com

Password: admin

Project Description

This is a Next.js 14 + React 18 client project with:

Redux Toolkit for state management

TailwindCSS with animations

Ant Design components

Lucide React icons

EmailJS integration

JWT authentication

Product and Category management

Add-to-cart functionality with local cart state

Video.js and WebRTC support

Toast notifications with react-hot-toast and sonner

Installation

Clone the repository:

git clone <https://github.com/Sadman-Sakib748/test-client>
cd test-client


Install dependencies:

npm install

Scripts
Script	Description
npm run dev	Start development server
npm run dev-local	Start dev server on local network (custom host and port)
npm run build	Build production version
npm run start	Start production server
npm run lint	Run ESLint
Technologies & Dependencies

Next.js 14.2.3

React 18

Redux Toolkit & React Redux

Tailwind CSS & Tailwind Animations

Ant Design 5.17.3

Lucide React 0.544.0

React Hot Toast & Sonner

Video.js & VideoJS Record

JWT Decode

Browser Image Compression

Swiper

Project Structure
/pages
/components
/redux
  /services
    product/
    category/
/public
/styles


pages/ → Next.js page routes

components/ → Reusable UI components

redux/services/ → API slices for Product and Category

public/ → Images, assets, placeholders

styles/ → TailwindCSS global styles

Usage

Start the dev server:

npm run dev


Access the app at:

http://localhost:3000


Login using the admin credentials above.

Notes

Products and Categories are dynamically fetched from the API.

Add-to-cart updates a local cart state; can be extended to Redux or backend persistence.

Toast notifications are used for user feedback