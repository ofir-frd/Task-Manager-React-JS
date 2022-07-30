import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () =>{
        console.log('Add clicked')
    }

    return (
        <header className={'header'}>
            <h1 style={{ }}>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps ={
    title: "Task Manager"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
