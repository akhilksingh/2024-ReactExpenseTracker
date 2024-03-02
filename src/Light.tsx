type Props = {
    variant: 'green' | 'red' | 'yellow'
};

const Light = ({ variant = 'green'}: Props) => {
    return <div 
        style={{ 
            padding: 20,
            background: variant,
            borderRadius: '50%',
            width: 20,
            height: 20 
        }}>
        </div>
}

export default Light;