export interface SingleReflex { // previously ReflexList
    reflex_id: number;
    title: string;
    videos: Array<string>;
    education: string;
  };

  export interface MultipleReflexes {
    reflex_id: number;
    title: string;
  }