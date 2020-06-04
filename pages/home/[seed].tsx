import { routeParams } from '../../core';
import Test from '../../components/Test';

export default function HomeSeed() {
  console.log(routeParams());

  return (
    <div className="container">
      <Test />
    </div>
  );
}
