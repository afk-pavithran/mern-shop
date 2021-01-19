import {
    Container,
    FormControl,
    Input,
    FormLabel,
    Button
} from "@chakra-ui/react"
import './Login.css'

const Login = () => {
    return (
        <Container>
            <div className='Login'>
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email"  />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Enter Password</FormLabel>
                    <Input placeholder="Password" />
                </FormControl>
                <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                >
                    Login
                </Button>
            </div>
        </Container>
    )
}

export default Login
