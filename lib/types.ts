export interface Contact {
  id: string;
  first_name: string;
  last_name: string;

  company?: string;
  role?: string;

  phone?: string;
  email?: string;
  linkedin_url?: string;

  qualifications?: string[];
  education?: {
    level: string;
    institution: string;
    year?: number;
  }[];

  skills?: string[];

  hometown?: string;
  current_city?: string;

  notes?: string;
  birthday?: string;

  category?: string;
  relationship_strength?: string;

  tags?: string[];
  last_contacted?: string;
}
