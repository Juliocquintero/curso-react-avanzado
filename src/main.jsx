import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
	from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import AuthProvider from './hoc/AuthContext/Provider.jsx';

const httpLink = createHttpLink({
	uri: 'https://curso-react-avanzado-server.vercel.app/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
	const token = window.sessionStorage.getItem('token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</ApolloProvider>
	</React.StrictMode>,
);
