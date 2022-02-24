import { WithSpringConfig } from 'react-native-reanimated';

const SPRING_CONFIG: WithSpringConfig = {
	damping: 80,
	overshootClamping: true,
	restDisplacementThreshold: 0.1,
	restSpeedThreshold: 0.1,
	stiffness: 500,
};

export default SPRING_CONFIG;
