import { gql, useMutation } from '@apollo/client';

const LOGIN_MUTATION = gql`
	mutation login($input: UserCredentials!) {
		login(input: $input)
	}
`;
const useLoginMutation = () => {
	const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
	return { login, loading, error };
};

export default useLoginMutation;
