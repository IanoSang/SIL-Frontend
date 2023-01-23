import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form!: FormGroup;
  response:any;
  imageURL:any;

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      profile: ['']
    });
  }

  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // @ts-ignore
      this.form.get('photos').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', this.form.get('profile').value);

    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
        console.log(res);
        console.log(this.imageURL);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
