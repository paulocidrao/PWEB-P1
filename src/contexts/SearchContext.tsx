import { createContext, ReactNode, useState } from 'react'

interface SearchContextType {
    searchString: string;
    currentInputValue: string;
    handleChange: (value: string) => void;
    setCurrentInputValue: (value: string) => void;
}

interface SearchContextProviderProps {
    children: ReactNode
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [searchString, setSearch] = useState<string>('');
    const [currentInputValue, setCurrentInputValue] = useState<string>('');

    const handleChange = (value: string) => {
        const newSearch = value;
        setSearch(newSearch);
        console.log(newSearch)
    };

    return (
        <SearchContext.Provider value={{
            searchString,
            currentInputValue,
            handleChange,
            setCurrentInputValue
        }}>
            {children}
        </SearchContext.Provider>
    );
}