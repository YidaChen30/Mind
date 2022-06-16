import { useState, useEffect, useMemo } from 'react'

import "./Avatarstyle.css"

const AvatarGenerator = () => {

  const walletString = "=2132qewqwqewqqewq"
  const [hashValue, setHashValue] = useState("000000000000000000000000000000000000000000000000000000000000000000000000")

  const [hair, setHair] = useState(false)
  const [hairStyle, setHairStyle] = useState(null)
  const [eyeshape, setEyeshape] = useState(null)
  const [mouthShape, setMouthShape] = useState(null)
  const [beard, setBeard] = useState(false)
  const [beardStyle, setBeardStyle] = useState(null)

  const hairColour = hashValue.substring(6,12)
  const eyeColour = hashValue.substring(12,18)
  const mouthColour = hashValue.substring(18,24)
  const beardColour = hashValue.substring(24,30)
  const backgroundColor = hashValue.substring(30,36)

  const radiusAmount = "10px"

  // convert a string into SHA-512 hash. 
  const hash = async (message) => {
    console.log(message)
    if (message === "") return ""

    const encoder = new TextEncoder().encode(message)

    const hashBuffer = await crypto.subtle.digest('SHA-256', encoder)

    const hashArray = Array.from(new Uint8Array(hashBuffer))

    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

    return hashHex
  }

  const RenderAvatar = () => {
    let pixels = []
    console.log(hairStyle)
    pixels.push(<div style={{
      position: "absolute",
      height: "64px",
      width: "64px",
      backgroundColor:"#" + backgroundColor,
      borderRadius: radiusAmount
    }}/>)
    if (hair) {
      if (hairStyle === 0) {
        // balding
        pixels.push(<div style={{position:"absolute", 
        height: "16px", 
        width: "8px", 
        backgroundColor: "#" + hairColour,
        borderTopLeftRadius: radiusAmount
      }}/>)

        pixels.push(<div style={{position:"absolute",
        height: "16px", 
        width: "8px", 
        backgroundColor: "#" + hairColour,
        marginLeft:"56px",
        borderTopRightRadius: radiusAmount
        }}/>)
      }
      else if (hairStyle === 1) {
        // asian
        console.log('asian')
        pixels.push(<div style={{position:"absolute", 
        height: "16px", 
        width: "8px", 
        backgroundColor: "#" + hairColour}}/>)

        pixels.push(<div style={{position:"absolute",
        height: "16px", 
        width: "8px", 
        backgroundColor: "#" + hairColour,
        marginLeft:"56px"
        }}/>)

        pixels.push(<div style={{
          position: "absolute",
          height: "8px",
          width: "48px",
          backgroundColor: "#" + hairColour,
          marginLeft: "8px"
        }}/>)
      }
      else {
        // long
        pixels.push(<div style={{position:"absolute", 
        height: "32px", 
        width: "8px", 
        backgroundColor: "#" + hairColour}}/>)

        pixels.push(<div style={{position:"absolute",
        height: "32px", 
        width: "8px", 
        backgroundColor: "#" + hairColour,
        marginLeft:"56px"
        }}/>)

        pixels.push(<div style={{
          position: "absolute",
          height: "8px",
          width: "48px",
          backgroundColor: "#" + hairColour,
          marginLeft:"8px"
        }}/>)
      }
    }

    if (eyeshape === 0) {
      // dot
      pixels.push(<div style={{
        position:"absolute",
        width: "8px",
        height: "8px",
        backgroundColor: "#" + eyeColour,
        marginLeft: "16px",
        marginTop: "16px"
      }}/>)

      pixels.push(<div style={{
        position:"absolute",
        width: "8px",
        height: "8px",
        backgroundColor: "#" + eyeColour,
        marginLeft: "40px",
        marginTop: "16px"
      }}
      />)
    }
    else if (eyeshape === 1) {
      // big eyes
      pixels.push(<div style={{
        position:"absolute",
        width: "16px",
        height: "16px",
        backgroundColor: "#" + eyeColour,
        marginLeft: "8px",
        marginTop: "8px"
      }}/>)

      pixels.push(<div style={{
        position:"absolute",
        width: "16px",
        height: "16px",
        backgroundColor: "#" + eyeColour,
        marginLeft: "40px",
        marginTop: "8px"
      }}
      />)
    }
    else {
      // 2 dots
      pixels.push(<div style={{
        position:"absolute",
        width: "16px",
        height: "8px",
        backgroundColor: "#" + eyeColour,
        marginLeft: "8px",
        marginTop: "16px"
      }}/>)

      pixels.push(<div style={{
        position:"absolute",
        width: "16px",
        height: "8px",
        backgroundColor: "#" + eyeColour,
        marginLeft: "40px",
        marginTop: "16px"
      }}
      />)
    }
    
    if (mouthShape === 0) {
      // smile
      pixels.push(<div style={{
        position:"absolute",
        width: "8px",
        height: "8px",
        backgroundColor: "#" + mouthColour,
        marginLeft: "16px",
        marginTop: "32px"
      }}/>)

      pixels.push(<div style={{
        position:"absolute",
        width: "8px",
        height: "8px",
        backgroundColor: "#" + mouthColour,
        marginLeft: "40px",
        marginTop: "32px"
      }}
      />)

      pixels.push(<div style={{
        position:"absolute",
        width: "32px",
        height: "8px",
        backgroundColor: "#" + mouthColour,
        marginLeft: "16px",
        marginTop: "40px"
      }}
      />)
    }
    else if (mouthShape === 1) {
      pixels.push(<div style={{
        position:"absolute",
        width: "8px",
        height: "8px",
        backgroundColor: "#" + mouthColour,
        marginLeft: "16px",
        marginTop: "40px"
      }}/>)

      pixels.push(<div style={{
        position:"absolute",
        width: "16px",
        height: "8px",
        backgroundColor: "#" + mouthColour,
        marginLeft: "24px",
        marginTop: "32px"
      }}
      />)

      pixels.push(<div style={{
        position:"absolute",
        width: "16px",
        height: "8px",
        backgroundColor: "#" + mouthColour,
        marginLeft: "24px",
        marginTop: "48px"
      }}/>)

      pixels.push(<div style={{
        position:"absolute",
        width: "8px",
        height: "8px",
        backgroundColor: "#" + mouthColour,
        marginLeft: "40px",
        marginTop: "40px"
      }}/>)
    }
    else {
      pixels.push(<div style={{
        position:"absolute",
        width: "32px",
        height: "8px",
        backgroundColor: "#" + mouthColour,
        marginLeft: "16px",
        marginTop: "40px"
      }}/>)
    }

    if (beard) {
      // thick
      if (beardStyle === 0) {
        pixels.push(<div style={{
          position:"absolute",
          width: "8px",
          height: "24px",
          backgroundColor: "#" + beardColour,
          marginTop: "40px"
        }}
        />)
  
        pixels.push(<div style={{
          position:"absolute",
          width: "48px",
          height: "8px",
          backgroundColor: "#" + beardColour,
          marginLeft: "8px",
          marginTop: "56px"
        }}/>)
  
        pixels.push(<div style={{
          position:"absolute",
          width: "8px",
          height: "24px",
          backgroundColor: "#" + beardColour,
          marginLeft: "56px",
          marginTop: "40px"
        }}/>)
      }
      else if (beardStyle === 1) {
        // goatee
        pixels.push(<div style={{
          position:"absolute",
          width: "16px",
          height: "8px",
          backgroundColor: "#" + beardColour,
          marginLeft: "24px",
          marginTop: "56px"
        }}/>)
      }
      else {
        // thin
        pixels.push(<div style={{
          position:"absolute",
          width: "64px",
          height: "8px",
          backgroundColor: "#" + beardColour,
          marginTop: "56px", 
          borderBottomLeftRadius: radiusAmount,
          borderBottomRightRadius: radiusAmount
        }}/>)
      }
    }
    return pixels
  }

  const AvatarPixels = useMemo(() => RenderAvatar(), [hashValue])

  // set the wallet address data into a useState variable
  useEffect(() => {
    hash(walletString)
    .then(e => {
      setHashValue(e)
      const config = Array.from(e.substring(0,6))

      if (config[0].charCodeAt() % 2 === 0) {
        setHair(true)
      }

      setHairStyle(config[1].charCodeAt() % 3)

      setEyeshape(config[2].charCodeAt() % 3)

      setMouthShape(config[3].charCodeAt() % 3)

      if (config[4].charCodeAt() % 2 === 0) {
        setBeard(true)
      }

      setBeardStyle(config[5].charCodeAt() % 3)
    })
  }, [walletString])

  return (
    <div className={"avatardiv"}>
      {AvatarPixels}
    </div>
  )
}

export default AvatarGenerator