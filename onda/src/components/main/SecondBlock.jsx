/** @jsxImportSource @emotion/react */
import Spacer from '../common/Spacer'
import { motion } from 'framer-motion'

const Title = ({text}) => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '2rem',
      }}
    >
      {text}
    </div>
  );
}

const SubImage = ({image}) => {
  return (
    <motion.div
      className="mainimage"
      initial={{opacity: 0, y: 0}}
      whileInView={{
        opacity: 1,
        y: -50,
        transition: {delay: 0.3, type: "spring"},
      }}
      >
      <div
        css={{
          textAlign: 'center',
        }}
      >
        <img
          src={image}
          alt="mainImage"
          css={{
            maxWidth: '80%',
            height: 'auto',
          }}
        />
      </div>
    </motion.div>
  );
}

const SecondBlock = ({ titleText1, titleText2, image }) => {
  return (
    <div
      css={{
        display: 'flex',
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Spacer height="4.5rem" />
      <Title text={titleText1} />
      <Title text={titleText2} />
      <Spacer height="6rem" />
      <SubImage image={image} />
    </div>
  )
}

export default SecondBlock;
