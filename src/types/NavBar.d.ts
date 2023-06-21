export type NavBarProps = {
    query: string;
    searchMovie: (e: React.FormEvent) => void;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}