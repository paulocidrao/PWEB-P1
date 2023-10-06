import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'

export function useSearch() {
    const context = useContext(SearchContext)
    return context;
}