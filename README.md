<h1>Todo List React App with SuprSend Integration</h1>
<p>This project is a Todo List application built with React and integrated with SuprSend for notification management. The application allows users to manage their tasks and receive notifications via the SuprSend inbox component.</p>

<h2>Features</h2>
<ul>
  <li><strong>Todo List Management:</strong> Add, delete, and mark tasks as completed.</li>
  <li><strong>SuprSend Integration:</strong> Displays a notification inbox for real-time notifications.</li>
  <li><strong>Responsive Design:</strong> Optimized for both desktop and mobile views.</li>
</ul>

<h2>Getting Started</h2>
<p>Follow these steps to get a local copy of the project up and running:</p>

<h3>Prerequisites</h3>
<ul>
  <li><strong>Node.js:</strong> Make sure you have Node.js installed. Download it from <a href="https://nodejs.org/">nodejs.org</a>.</li>
  <li><strong>npm:</strong> Comes with Node.js. Use it to manage project dependencies.</li>
</ul>

<h3>Installation</h3>
<ol>
  <li><strong>Clone the Repository:</strong>
    <pre><code>git clone https://github.com/yourusername/todolist-app-react-js.git
cd todolist-app-react-js</code></pre>
  </li>
  <li><strong>Install Dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Set Up Environment Variables:</strong>
    <p>Create a <code>.env</code> file in the root of the project and add your SuprSend credentials:</p>
    <pre><code>REACT_APP_SUPRSEND_WORKSPACE_KEY=your_suprsend_workspace_key
REACT_APP_SUPRSEND_SUBSCRIBER_ID=your_suprsend_subscriber_id
REACT_APP_SUPRSEND_DISTINCT_ID=your_suprsend_distinct_id</code></pre>
    <p>Replace the placeholder values with your actual SuprSend credentials.</p>
  </li>
  <li><strong>Start the Development Server:</strong>
    <pre><code>npm start</code></pre>
    <p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to view the application.</p>
  </li>
</ol>

<h2>Deployment</h2>
<p>To deploy the application:</p>
<ol>
  <li><strong>Deploy to Vercel:</strong>
    <ul>
      <li>Connect your GitHub repository to Vercel.</li>
      <li>Set environment variables in the Vercel dashboard under the "Settings" tab of your project.</li>
    </ul>
  </li>
  <li><strong>Verify Deployment:</strong>
    <p>Check the Vercel deployment URL to ensure the application is live and functioning as expected.</p>
  </li>
</ol>

<h2>Usage</h2>
<ul>
  <li><strong>Todo List:</strong> Add, edit, and remove tasks from the list.</li>
  <li><strong>Notification Inbox:</strong> Click the bell icon to view notifications from SuprSend.</li>
</ul>

<h2>Acknowledgements</h2>
<ul>
  <li><strong>React:</strong> JavaScript library for building user interfaces.</li>
  <li><strong>SuprSend:</strong> Notification management and inbox service.</li>
  <li><strong>Vercel:</strong> Deployment and hosting platform.</li>
</ul>
