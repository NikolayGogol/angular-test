import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msg = '';
  searchModel = '';
  subComment = '';
  comments: any = [];
  res: any = [];
  subComments: any = [];
  subCommentField = false;

  private addComment(): void {
    this.comments.push({
      text: this.msg,
      subCommentField: this.subCommentField,
      subComments: []
    });
    this.msg = '';
  }

  addSubComment(commentIndex: number): void {
    this.comments[commentIndex].subComments.push(this.subComment);
    this.subComment = '';
    this.comments[commentIndex].subCommentField = false;
  }

  private reply(commentIndex: number): void {
    this.comments[commentIndex].subCommentField = true;
  }

  private removeSubComment(commentIndex: number, subCommentIndex: number): void {
    this.comments[commentIndex].subComments.splice(subCommentIndex, 1);
  }

  private removeComment(commentIndex: number): void {
    this.comments.splice(commentIndex, 1);
  }

  private search(): void {
    if (this.searchModel.length === 0) {
      this.res = [];
    } else {
      const comments: any = this.comments;
      this.res = comments.filter((item: any) => item.text.includes(this.searchModel));
    }
  }
}
