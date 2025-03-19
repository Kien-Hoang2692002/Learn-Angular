import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Để dùng *ngFor, *ngIf
import { trigger, style, animate, transition, stagger, query } from '@angular/animations';
import { Milestone } from '../shared/types/milestone';


@Component({
  standalone: true,
  selector: 'app-love-timeline',
  templateUrl: './love-timeline.component.html',
  styleUrls: ['./love-timeline.component.css'],
  imports: [
    CommonModule
  ],
  animations: [
    trigger('timelineAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class LoveTimelineComponent implements OnInit {
  milestones: Milestone[] = [
    {
      id: '1',
      date: new Date('2024-01-01'),
      title: 'Ngày gặp nhau',
      description: 'Gặp nhau ở quán cà phê góc phố',
      imageUrls: [
        'https://i.pinimg.com/originals/0c/c8/c2/0cc8c24447f0e8ed4f0fff78f5bb388a.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMY7s4D3dCHkBP1H1vbaceIZN2EEC7HNKPug&s'
      ],
      size: 'medium',
      emotionalTone: 'Lãng mạn',
      specialMoment: 'Ánh mắt đầu tiên gặp nhau',
      gift: 'Không có quà',
      location: 'Quán cà phê góc phố',
      loveNotes: 'Lần đầu gặp nhau, một kỷ niệm khó quên.'
    },
    {
      id: '2',
      date: new Date('2024-03-14'),
      title: 'Ngày tỏ tình',
      description: 'Dưới cơn mưa bất chợt',
      size: 'medium',
      emotionalTone: 'Xúc động',
      specialMoment: 'Lời tỏ tình dưới mưa',
      gift: 'Hoa hồng',
      location: 'Công viên gần nhà',
      loveNotes: 'Cảm giác hồi hộp và ngọt ngào khi tỏ tình.'
    },
    {
      id: '3',
      date: new Date('2024-10-10'),
      title: 'Kỷ niệm 100 ngày',
      description: 'Cùng uống trà sữa và xem phim',
      imageUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPrEzuAPx8Z9uN-MTs5088voXKKlySjQWWrkDBGeJw3dVJR9wo95cifXAH05tOqBTyfs&usqp=CAU'],
      size: 'small',
      emotionalTone: 'Hạnh phúc',
      specialMoment: 'Cùng chia sẻ những phút giây thư giãn',
      gift: 'Trà sữa và một bộ phim yêu thích',
      location: 'Rạp chiếu phim',
      loveNotes: 'Một buổi tối tuyệt vời với nhau, đầy những khoảnh khắc ngọt ngào.'
    },
    {
      id: '4',
      date: new Date('2024-05-20'),
      title: 'Ngày du lịch cùng nhau',
      description: 'Khám phá những địa điểm mới, cùng nhau tạo ra những kỷ niệm đẹp',
      imageUrls: [
        'https://i.pinimg.com/736x/12/7f/52/127f5286ced5227274a7d190dc4a69e8.jpg',
        'https://i.pinimg.com/736x/10/2e/23/102e239ae67c1e04d808d6e36d108179.jpg'
      ],
      size: 'small',
      emotionalTone: 'Hứng khởi',
      specialMoment: 'Khám phá thành phố mới cùng nhau',
      gift: 'Chuyến đi du lịch',
      location: 'Địa điểm du lịch',
      loveNotes: 'Chuyến đi này là bước ngoặt lớn trong mối quan hệ của chúng ta.'
    },
    {
      id: '5',
      date: new Date('2024-08-15'),
      title: 'Ngày sinh nhật',
      description: 'Mừng sinh nhật bên nhau với những món quà và lời chúc',
      imageUrls: ['https://i.pinimg.com/736x/10/2e/23/102e239ae67c1e04d808d6e36d108179.jpg'],
      size: 'large',
      emotionalTone: 'Vui vẻ',
      specialMoment: 'Chúc mừng sinh nhật lần đầu tiên bên nhau',
      gift: 'Món quà bất ngờ',
      location: 'Nhà riêng',
      loveNotes: 'Sinh nhật của em, nhưng lại là kỷ niệm đặc biệt của cả hai chúng ta.'
    },
    {
      id: '6',
      date: new Date('2024-12-25'),
      title: 'Ngày Giáng sinh',
      description: 'Đón Giáng sinh ấm áp với nhau, cùng thưởng thức bữa tiệc noel',
      size: 'small',
      emotionalTone: 'Ấm áp',
      specialMoment: 'Cùng nhau mở quà vào đêm Giáng sinh',
      gift: 'Quà Giáng sinh đặc biệt',
      location: 'Nhà hoặc nơi tổ chức lễ Giáng sinh',
      loveNotes: 'Ngày Giáng sinh bên nhau, thật sự là một kỷ niệm tuyệt vời.'
    }
  ];
  

  constructor() {}

  ngOnInit() {
    // Dữ liệu có thể lấy từ service sau này
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}