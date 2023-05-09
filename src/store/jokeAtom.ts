import { atom, useRecoilState } from 'recoil'

const state = atom<string>({
    key: 'textState',
    default: '',
  });

const JokeState = ()=> {  

    const [joke, setJoke] = useRecoilState(state)

    return { joke, setJoke }
}

export default JokeState
