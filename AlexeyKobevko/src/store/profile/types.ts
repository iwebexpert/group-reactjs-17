export interface ProfileProps {
  loading: boolean;
  profile: {
    name: string;
    age: number;
  };
  error: boolean;
}
