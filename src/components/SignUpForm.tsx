import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function SignUpForm() {

    const [formType, setFormType] = useState<any>();
    let perameter  = useParams();

    useEffect(() => {
        setFormType(perameter.type?.substr(1));
    }, [perameter])
        
    return(
        <>
            this is demo {formType}
            
        </>
    )
}