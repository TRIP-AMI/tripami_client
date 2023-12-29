export class ProgramCourse {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public id: string,
    public time: string = '',
    public distance: string = '',
    public walkingTime: string = '',
    public carTime: string = '',
    public imgInfo: ProgramCourseImg = {
      imgUrl: '',
      title: '',
      subTitle: '',
    },
    // eslint-disable-next-line no-empty-function
  ) {}
}
export type ProgramCourseImg = {
  imgUrl: string;
  title: string;
  subTitle: string;
};
