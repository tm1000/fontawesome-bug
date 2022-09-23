import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return <>
    {/* Throws Errors */}
    <FontAwesomeIcon icon="bars" fixedWidth color="black" />
    {/* Works */}
    <FontAwesomeIcon icon={faBars} fixedWidth color="black" />
  </>;
}
