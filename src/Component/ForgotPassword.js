import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../Contexts/AuthContexts'
import { Link} from 'react-router-dom'


export default function ForgotPassword() {
    const emailRef = useRef()
    // const passwordRef = useRef()
    const { reset } = useAuth()
    const [error, setError] = useState("")
    const [messege, setMessege] = useState("")
    const [loading, setLoading] = useState(false)
    // const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        
        try{
            setMessege("")
            setError('')
            setLoading(true)
            await reset(emailRef.current.value)
            setMessege("Please Check Your Inbox")
            
        }catch{
            setError("Failed to Reset Password")
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {messege && <Alert variant="success">{ messege }</Alert>}
                <Form onSubmit={ handleSubmit }>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>


                    <Button disabled={loading} className="w-100 mt-3" type="submit">Reset Password</Button>

                    <div className = 'w-100 text-center mt-3'>
                        <Link to='/login'>Log In</Link>
                        </div>

                </Form>
            </Card.Body>
        </Card>
        <div className = 'w-100 text-center mt-2'>
            Need an account? <Link to='/signup'>SignUp</Link>
        </div>
        </>
    )
}
