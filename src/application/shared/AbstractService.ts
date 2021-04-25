export default abstract class AbstractService<T, U> {
  abstract execute(args: T): Promise<U>;
}
