Redis.new.flushdb
Task.destroy_all
Project.destroy_all

json = {
  projects: [
    {
      name: "CodeFlow - Real-time Collaborative Coding Platform",
      tasks: [
        "Develop real-time code synchronization feature",
        "Implement user authentication and role management"
      ]
    },
    {
      name: "CyberShield - AI-powered Cybersecurity Monitoring System",
      tasks: [
        "Set up real-time threat detection using machine learning",
        "Implement a firewall and intrusion detection system"
      ]
    },
    {
      name: "CloudSync - Multi-device Cloud Storage and Backup",
      tasks: [
        "Design a cloud-based file storage system",
        "Implement end-to-end encryption for data security"
      ]
    },
    {
      name: "DataPulse - Real-time Data Analytics Dashboard",
      tasks: [
        "Connect the system to different data sources (APIs, databases)",
        "Implement data visualization tools (charts, graphs, heatmaps)"
      ]
    },
    {
      name: "AI Assist - Smart Virtual Assistant for Productivity",
      tasks: [
        "Train AI models for natural language processing (NLP)",
        "Develop voice and text-based input support"
      ]
    }
  ]
}

CreateSeeds.new(json:).call
