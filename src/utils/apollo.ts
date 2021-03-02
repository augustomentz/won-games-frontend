import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject
} from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
		cache: new InMemoryCache()
	})
}

export function initApollo(initialState = {}) {
	const apolloClientGlobal = apolloClient ?? createApolloClient()

	// Recupera dados do cache
	if (initialState) {
		apolloClientGlobal.cache.restore(initialState)
	}

	// Sempre inicializando no SSR com cache limpo
	if (typeof window === 'undefined') return apolloClientGlobal
	apolloClient = apolloClient ?? apolloClientGlobal

	return apolloClient
}

export function useApollo(initialState = {}) {
	const store = useMemo(() => initApollo(initialState), [initialState])

	return store
}
