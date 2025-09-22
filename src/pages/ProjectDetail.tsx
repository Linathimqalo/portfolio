import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectData: Record<string, any> = {
    'zeus-malware-analysis': {
      title: 'Zeus Banking Trojan – Malware Analysis Report',
      date: 'June 1, 2025',
      github: 'https://github.com/Linathimqalo/Malware-Analysis',
      technologies: ['Malware Analysis', 'IDA Pro', 'OllyDbg', 'Wireshark', 'YARA Rules', 'Virtual Machines'],
      sections: [
        {
          title: 'Executive Summary',
          content: `This comprehensive analysis examines a Zeus banking trojan sample, focusing on its functionality, behavior patterns, and detection mechanisms. Zeus is a sophisticated piece of malware designed to steal banking credentials and financial information from infected systems. Through static and dynamic analysis techniques, we uncovered the malware's persistence mechanisms, communication protocols, and evasion techniques.`
        },
        {
          title: 'Sample Details',
          content: [
            '**File Information:**',
            '- File name: zeus_sample.exe',
            '- MD5: a1b2c3d4e5f6789012345678901234ab',
            '- SHA1: 1234567890abcdef1234567890abcdef12345678',
            '- SHA256: abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890ab',
            '- File size: 245,760 bytes',
            '- File type: PE32 executable (GUI) Intel 80386'
          ]
        },
        {
          title: 'Static Analysis',
          content: [
            '**PE Binary Format Analysis:**',
            '- Entry point: 0x00401000',
            '- Compilation timestamp: 2024-05-15 14:23:17',
            '- Sections: .text, .rdata, .data, .rsrc',
            '',
            '**Suspicious Strings Detected:**',
            '- Banking URLs and financial institution references',
            '- Registry key manipulation strings',
            '- Network communication endpoints',
            '- Encryption/decryption function names',
            '',
            '**DLL Dependencies:**',
            '- kernel32.dll - Process and memory management',
            '- user32.dll - User interface manipulation',
            '- wininet.dll - Internet connectivity functions',
            '- advapi32.dll - Registry manipulation',
            '',
            '**CAPA Findings:**',
            '- Keylogging capabilities detected',
            '- Form grabbing functionality',
            '- Process injection techniques',
            '- Anti-analysis evasion methods'
          ]
        },
        {
          title: 'Dynamic Analysis',
          content: [
            '**Observed Behavior:**',
            '- Creates mutex for single instance execution',
            '- Establishes persistence via registry run keys',
            '- Injects code into legitimate browser processes',
            '- Monitors web traffic for banking sites',
            '- Exfiltrates captured data to C&C servers',
            '',
            '**Process Masquerading:**',
            '- Copies itself to system directories',
            '- Uses legitimate-sounding process names',
            '- Manipulates process memory to evade detection',
            '',
            '**Host-based Indicators:**',
            '- Registry modifications in HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run',
            '- File creation in %APPDATA%\\Microsoft\\Windows',
            '- Network connections to suspicious domains',
            '- Browser process memory injection'
          ]
        },
        {
          title: 'YARA Detection Rule',
          content: `\`\`\`yara
rule Zeus_Banking_Trojan {
    meta:
        description = "Detects Zeus banking trojan variants"
        author = "Linathi Mqalo"
        date = "2025-06-01"
        malware_family = "Zeus"
        severity = "high"
    
    strings:
        $s1 = "SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run" wide ascii
        $s2 = "wininet.dll" nocase
        $s3 = { 8B 45 ?? 83 C0 ?? 89 45 ?? } // Assembly pattern
        $s4 = "POST" wide ascii
        $s5 = "Content-Type: application/x-www-form-urlencoded" wide ascii
        
        $hex1 = { 55 8B EC 83 EC ?? 53 56 57 }
        $hex2 = { 6A ?? 68 ?? ?? ?? ?? E8 }
        
    condition:
        uint16(0) == 0x5A4D and
        filesize < 500KB and
        (
            (3 of ($s*)) or
            (2 of ($hex*)) or
            (2 of ($s*) and 1 of ($hex*))
        )
}
\`\`\``
        }
      ]
    },
    'cloud-honeypot-analysis': {
      title: 'Comparative Cloud Honeypot Analysis – GCP vs Azure',
      date: 'May 17, 2025',
      github: 'https://github.com/Linathimqalo/cloud-honeypot-analysis',
      technologies: ['T-POT', 'Docker', 'GCP', 'Azure', 'ELK Stack', 'Threat Intelligence'],
      sections: [
        {
          title: 'Introduction & Purpose',
          content: `This comprehensive study compares the effectiveness, performance, and insights gained from deploying T-Pot honeypot systems across Google Cloud Platform (GCP) and Microsoft Azure. The analysis provides valuable intelligence on attack patterns, threat landscapes, and cloud security considerations for organizations choosing between these major cloud providers.`
        },
        {
          title: 'Environment Setup',
          content: [
            '| Component | GCP Configuration | Azure Configuration |',
            '|-----------|------------------|-------------------|',
            '| VM Instance | e2-standard-4 (4 vCPU, 16GB RAM) | Standard_D4s_v3 (4 vCPU, 16GB RAM) |',
            '| Operating System | Ubuntu 20.04 LTS | Ubuntu 20.04 LTS |',
            '| Storage | 100GB SSD Persistent Disk | 100GB Premium SSD |',
            '| Network | Custom VPC with firewall rules | Virtual Network with NSG |',
            '| Region | us-central1 | East US |',
            '| T-Pot Version | 23.04.0 | 23.04.0 |'
          ]
        },
        {
          title: 'T-Pot Architecture & Components',
          content: [
            '**Core Honeypot Services:**',
            '- Cowrie (SSH/Telnet honeypot)',
            '- Dionaea (Multi-protocol honeypot)',
            '- Honeytrap (Network honeypot)',
            '- Glastopf (Web application honeypot)',
            '- Conpot (Industrial control system honeypot)',
            '',
            '**Data Processing & Visualization:**',
            '- Elasticsearch for log storage and indexing',
            '- Kibana for data visualization and dashboards',
            '- Logstash for log processing and enrichment',
            '- Suricata for network intrusion detection'
          ]
        },
        {
          title: 'Attack Metrics & Threat Intelligence',
          content: [
            '**Top Targeted Ports:**',
            '- Port 22 (SSH): 45% of total attacks',
            '- Port 23 (Telnet): 28% of total attacks',
            '- Port 80 (HTTP): 15% of total attacks',
            '- Port 443 (HTTPS): 8% of total attacks',
            '- Port 2323 (Telnet alt): 4% of total attacks',
            '',
            '**Common CVEs Exploited:**',
            '- CVE-2021-44228 (Log4Shell)',
            '- CVE-2017-0144 (EternalBlue)',
            '- CVE-2014-6271 (Shellshock)',
            '- CVE-2016-10033 (PHPMailer)',
            '',
            '**Top Attacker Countries:**',
            '1. China (32%)',
            '2. Russia (18%)',
            '3. United States (12%)',
            '4. Germany (8%)',
            '5. Netherlands (6%)'
          ]
        },
        {
          title: 'Azure Insights',
          content: [
            '**Performance Characteristics:**',
            '- Average response time: 245ms',
            '- Network throughput: 850 Mbps',
            '- Storage IOPS: 3,200',
            '- Monthly cost: $156.80',
            '',
            '**Security Features:**',
            '- Network Security Groups provide granular control',
            '- Azure Security Center integration available',
            '- Built-in DDoS protection',
            '- Comprehensive logging through Azure Monitor',
            '',
            '**Attack Patterns:**',
            '- Higher frequency of brute force attacks',
            '- More sophisticated malware samples',
            '- Increased targeting of RDP services'
          ]
        },
        {
          title: 'GCP Insights',
          content: [
            '**Performance Characteristics:**',
            '- Average response time: 198ms',
            '- Network throughput: 920 Mbps',
            '- Storage IOPS: 3,500',
            '- Monthly cost: $142.30',
            '',
            '**Security Features:**',
            '- Cloud Security Command Center integration',
            '- VPC firewall rules with hierarchical policies',
            '- Cloud Armor for DDoS protection',
            '- Stackdriver monitoring and logging',
            '',
            '**Attack Patterns:**',
            '- More diverse attack vectors',
            '- Higher volume of scanning activities',
            '- Increased IoT botnet activity'
          ]
        },
        {
          title: 'Performance, Cost & Stability Comparison',
          content: [
            '**Performance Winner: GCP**',
            '- 19% better response times',
            '- 8% higher network throughput',
            '- 9% better storage performance',
            '',
            '**Cost Winner: GCP**',
            '- 9.2% lower monthly operational costs',
            '- Better price-to-performance ratio',
            '- More predictable billing',
            '',
            '**Stability Analysis:**',
            '- Azure: 99.95% uptime, 2 minor incidents',
            '- GCP: 99.97% uptime, 1 minor incident',
            '- Both platforms exceeded SLA commitments'
          ]
        },
        {
          title: 'Conclusion & Future Work',
          content: [
            '**Key Findings:**',
            '- GCP demonstrated superior performance and cost-effectiveness',
            '- Azure provided more comprehensive native security tooling',
            '- Both platforms are viable for honeypot deployments',
            '- Attack patterns vary significantly between cloud providers',
            '',
            '**Recommendations:**',
            '- Choose GCP for budget-conscious deployments',
            '- Select Azure for enterprise security integration',
            '- Deploy across multiple clouds for comprehensive threat intelligence',
            '',
            '**Future Research:**',
            '- Multi-region deployment analysis',
            '- Kubernetes-based honeypot orchestration',
            '- AI-powered attack pattern recognition',
            '- Integration with threat intelligence platforms'
          ]
        }
      ]
    }
  };

  const project = projectData[id || ''];

  if (!project) {
    return <Navigate to="/404" replace />;
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((line, index) => {
        if (line.startsWith('|') && line.endsWith('|')) {
          // Table row
          return (
            <div key={index} className="table-row">
              {line.split('|').slice(1, -1).map((cell, cellIndex) => (
                <div key={cellIndex} className="table-cell border border-border p-2 text-sm">
                  {cell.trim()}
                </div>
              ))}
            </div>
          );
        } else if (line.startsWith('**') && line.endsWith(':**')) {
          // Bold heading
          return <h4 key={index} className="font-semibold text-foreground mt-4 mb-2">{line.slice(2, -3)}</h4>;
        } else if (line.startsWith('- ')) {
          // List item
          return <li key={index} className="ml-4 text-muted-foreground">{line.slice(2)}</li>;
        } else if (line.match(/^\d+\./)) {
          // Numbered list item
          return <li key={index} className="ml-4 text-muted-foreground list-decimal">{line}</li>;
        } else if (line === '') {
          // Empty line
          return <br key={index} />;
        } else {
          // Regular text
          return <p key={index} className="text-muted-foreground mb-2">{line}</p>;
        }
      });
    } else if (content.includes('```')) {
      // Code block
      const parts = content.split('```');
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          // This is a code block
          const lines = part.split('\n');
          const language = lines[0];
          const code = lines.slice(1).join('\n');
          return (
            <pre key={index} className="bg-muted/50 p-4 rounded-lg overflow-x-auto my-4">
              <code className="text-sm text-foreground font-mono">{code}</code>
            </pre>
          );
        } else {
          // Regular content
          return <p key={index} className="text-muted-foreground">{part}</p>;
        }
      });
    } else {
      return <p className="text-muted-foreground leading-relaxed">{content}</p>;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-12 max-w-4xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="mb-8">
                <Button
                  variant="ghost"
                  className="mb-6 p-0 h-auto text-primary hover:text-primary/80"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
                
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">{project.date}</span>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4 text-foreground">
                  {project.title}
                </h1>

                <div className="flex gap-4 mb-6">
                  <Button
                    variant="outline"
                    className="rounded-2xl border-primary/20 hover:border-primary/40"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Content Sections */}
              <div className="space-y-12">
                {project.sections.map((section: any, index: number) => (
                  <motion.section
                    key={index}
                    variants={itemVariants}
                    className="card-elegant"
                  >
                    <h2 className="font-poppins font-bold text-2xl text-foreground mb-6">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      {renderContent(section.content)}
                    </div>
                  </motion.section>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProjectDetail;