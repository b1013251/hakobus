require 'csv'

ar = CSV.read('./stop_num.csv')
newar = ar.uniq

CSV.open('stop_num_uniq.csv', 'w') do |csv|
  newar.each do |rows|
    csv << rows
  end
end
