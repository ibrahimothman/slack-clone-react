import React, {useState, useContext, useEffect, useRef} from 'react'
import styled from 'styled-components'
import RoomCtx from '../store/RoomContext'

function AddMessage() {

    const addMessageRef = useRef(null)
    const roomCtx = useContext(RoomCtx)

    useEffect(() => {
        addMessageRef?.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [])

    const [message, setMessage] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        if (message) {
            await roomCtx.addMessage(message)
            setMessage('')
            addMessageRef?.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
    return (
        <Wrapper ref={addMessageRef}>
            <form onSubmit={submitHandler}>
                <input type="text" value={message} placeholder='Type something...' onChange={e => setMessage(e.target.value)} />
            </form>
        </Wrapper>
    )
}

export default AddMessage

const Wrapper = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;

        > input {
            position: fixed;
            bottom: 20px;
            width: 60%;
            padding: 20px;
            outline: none;
            border: 1px solid gray;
            border-radius: 3px;
        }
    }

`
