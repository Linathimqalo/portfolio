import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Code, Cloud, Network, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "SIEM & Monitoring",
      color: "from-red-500 to-orange-500",
      skills: ["Wazuh", "Security Onion", "PfSense", "TPOT", "PCAP Analysis", "Incident Response"]
    },
    {
      icon: Network,
      title: "Threat Detection & Response",
      color: "from-purple-500 to-pink-500",
      skills: ["YARA Rules", "CVE Exploitation", "Vulnerability Scanning", "Nessus", "OpenVAS", "Malware Analysis"]
    },
    {
      icon: Code,
      title: "Penetration Testing",
      color: "from-blue-500 to-cyan-500",
      skills: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite", "Enumeration", "Privilege Escalation"]
    },
    {
      icon: Server,
      title: "Security Tools",
      color: "from-green-500 to-teal-500",
      skills: ["Firewall Config", "VPNs (Fortinet, SoftEther)", "Server Hardening", "DAC", "SSL/TLS"]
    },
    {
      icon: Database,
      title: "OS & Servers",
      color: "from-indigo-500 to-purple-500",
      skills: ["Windows Server 2022", "Ubuntu", "Active Directory", "MacOS"]
    },
    {
      icon: Cloud,
      title: "Cloud & Virtualization",
      color: "from-yellow-500 to-orange-500",
      skills: ["VMware", "VirtualBox", "Azure", "GCP", "Cloudflare"]
    }
  ];

  const developmentSkills = [
    "HTML", "CSS", "JavaScript", "Python", "Node.js", "React", "C#",
    "Git", "GitHub", "WordPress", "Plesk", "cPanel", "Vercel", "MySQL", "MongoDB", "REST APIs"
  ];

  const networkingSkills = [
    "DNS", "DHCP", "VLANs", "TCP/IP", "Router/Switch Config", "Backup & Recovery", "Imaging", "DR Planning"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="font-open-sans text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive expertise across cybersecurity, system administration, and modern development technologies
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Main Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card-elegant hover-luxury group"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} p-2.5 mr-4 group-hover:shadow-glow transition-all duration-300`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-xl text-sm font-open-sans hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Sections */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Development Skills */}
            <motion.div variants={itemVariants} className="card-elegant">
              <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6 flex items-center">
                <Code className="w-6 h-6 text-primary mr-3" />
                Development & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {developmentSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-2 bg-gradient-primary/10 text-primary rounded-2xl text-sm font-medium font-open-sans hover:bg-gradient-primary/20 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Networking Skills */}
            <motion.div variants={itemVariants} className="card-elegant">
              <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6 flex items-center">
                <Network className="w-6 h-6 text-primary mr-3" />
                Networking & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {networkingSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-2 bg-secondary/10 text-secondary rounded-2xl text-sm font-medium font-open-sans hover:bg-secondary/20 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;