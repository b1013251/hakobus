require 'csv'

# 配列で読み込み重複を削除（uniqメソッドで楽勝）
csvArray = CSV.read('./stop_num.csv')
uniqCsvArray = ar.uniq

# 重複を削除した配列をcsvで出力
CSV.open('stop_num_uniq.csv', 'w') do |csv|
  uniqCsvArray.each do |rows|
    csv << rows
  end
end
