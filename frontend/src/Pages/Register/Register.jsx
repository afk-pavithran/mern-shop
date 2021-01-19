import {
    Container,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button
    } from '@chakra-ui/react'
import './Register.css'

const Register = () => {
    return (
        <Container>
            <div className='Register'>
                <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="Full name" />
                </FormControl>  
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email"  />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Enter Password</FormLabel>
                    <Input placeholder="Password" />
                </FormControl>  
                <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input placeholder="Confirm Password" />
                </FormControl> 
                <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                >
                    Register
                </Button>

            </div>
        </Container>
    )
}

export default Register
