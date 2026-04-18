# theCodingScene.dev Portfolio Template

Welcome to the 3D Portfolio repository, a beautiful, interactive, and fully responsive portfolio template provided by **theCodingScene.dev**! 

If you are looking to create an outstanding online presence with immersive 3D elements, this template is the perfect starting block. Designed specifically for developers and designers who want to showcase their work in style.

![theCodingScene.dev](https://via.placeholder.com/800x400?text=theCodingScene.dev+Portfolio+Template)

## 🚀 Features

- **3D Hero Section:** A striking interactive 3D hero scene built with `Three.js` and `@react-three/fiber` that immediately grabs attention.
- **Responsive Design:** Completely responsive across all devices, with optimized views for mobile, tablet, and desktop setups.
- **Dynamic Projects Showcase:** Easily display your best projects via robust and customizable components.
- **Integrated Contact Form:** A functional contact form via `@emailjs/browser` to connect directly with your audience.
- **Modern Tech Stack:** Built with Vue and React best practices, utilizing tools like Vite and Tailwind CSS.
- **Easily Configurable:** Contains a central configuration file to set up all your personal and project information.

## 🛠 Tech Stack

- **Framework:** React.js + Next.js
- **Styling:** Tailwind CSS
- **3D Rendering:** Three.js, React Three Fiber, React Three Drei
- **Animations:** GSAP (GreenSock)
- **Tooling:** Vite, ESLint

## 📦 Getting Started

### Prerequisites

You'll need Node.js installed on your local machine to run and build this application.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/3d-portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd 3d-portfolio
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available locally at `http://localhost:5173`.

## ⚙️ Configuration

### 1. Environment Variables

Create a new file named `.env` in the root of your project and add the following EmailJS credentials. You will need to replace the placeholder values with your own actual credentials from your [EmailJS](https://www.emailjs.com/) account so that the Contact Form works properly.

```env
VITE_APP_EMAILJS_USER_ID=abc
VITE_APP_EMAILJS_TEMPLATE_ID=tdef
VITE_APP_EMAILJS_SERVICE_ID=service
```

### 2. General Customization

To customize this portfolio for your own use, navigate to `src/config/constants.js` and replace the placeholder content (like CodingScene.dev, project details, and job experiences) with your own information.

1. **Edit Experiences:** Replace current items in the `workExperiences` array.
2. **Edit Projects:** Replace references in `myProjects`.
3. **Change Profile Settings:** Update your email and social handles across `About.jsx` and `Footer.jsx`.
4. **Change Project Screen Videos:** To update the videos playing on the 3D monitor in the Projects section, place your own `.mp4` video files into the `public/textures/project` folder. Then, make sure the `texture` property paths within the `myProjects` array point to your newly added videos.
5. **Change Hero Section Screens:** To customize the images shown on the desktop monitors within the Hero section's Hacker Room, simply replace `public/textures/desk/monitor.png` and `public/textures/desk/screen.png` with your own images.

## 📝 Follow Us

Stay connected for more tutorials, templates, and tech insights:

- **Instagram:** [@theCodingScene.dev](https://instagram.com/thecodingscene.dev)
- **Website:** [theCodingScene.dev](https://thecodingscene.vercel.app/) 

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information. This template is open-sourced and free to use for your personal and commercial projects.
# 3d-portfolio
