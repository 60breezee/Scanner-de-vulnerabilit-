export enum Severity {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  INFO = 'INFO'
}

export interface Vulnerability {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  line?: number;
  fixSuggestion: string;
}

export interface ScanResult {
  score: number; // 0 to 100
  summary: string;
  vulnerabilities: Vulnerability[];
  scanDuration: number;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}